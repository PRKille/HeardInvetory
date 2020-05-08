using Microsoft.AspNetCore.Mvc;
using HeardInventory.Models;
using System.Collections.Generic;
using System.Linq;

namespace HeardInventory.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ItemsController : ControllerBase
  {
    private readonly HeardInventoryContext _db;

    public ItemsController(HeardInventoryContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Item>> Get(string name, string category, string vendor)
    {
      var query = _db.Items.AsQueryable();

      if(name != null)
      {
        query = query.Where(item => item.ItemName == name);
      }
      return query.ToList();
    }
  }
}