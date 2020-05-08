using Microsoft.AspNetCore.Mvc;
using HeardInventory.Models;
using System.Collections.Generic;
using System.Linq;

namespace HeardInventory.Controllers
{
  public class ItemsController : Controller
  {
    private readonly HeardInventoryContext _db;

    public ItemsController(HeardInventoryContext db)
    {
      _db = db;
    }

    public ActionResult Index()
    {
      List<Item> model = _db.Items.ToList();
      return View(model);
    }
  }
}