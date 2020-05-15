using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using HeardInventory.Models;

namespace HeardInventory.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoriesController : Controller
  {
    private readonly HeardInventoryContext _db;

    public CategoriesController(HeardInventoryContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult <IEnumerable<Category>> Get()
    {
      return _db.Categories.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Category> Get(int id)
    {
      return _db.Categories.FirstOrDefault(cat => cat.CategoryId == id);
    }

    [EnableCors("MyPolicy")]
    [HttpPost]
    public void Post([FromBody] Category category)
    {
      _db.Categories.Add(category);
      _db.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Category category)
    {
      category.CategoryId = id;
      _db.Entry(category).State = EntityState.Modified;
      _db.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      Category categoryForDeletion = _db.Categories.FirstOrDefault(category => category.CategoryId == id);
      _db.Categories.Remove(categoryForDeletion);
      _db.SaveChanges();
    }
  }
}