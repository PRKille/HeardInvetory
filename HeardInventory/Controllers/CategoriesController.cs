using Microsoft.AspNetCore.Mvc;
using HeardInventory.Models;
using System.Collections.Generic;
using System.Linq;

namespace HeardInventory.Controllers
{
  public class CategoriesController : Controller
  {
    private readonly HeardInventoryContext _db;

    public CategoriesController(HeardInventoryContext db)
    {
      _db = db;
    }

    public ActionResult Index()
    {
      List<Category> model = _db.Categories.ToList();
      return View(model);
    }
  }
}