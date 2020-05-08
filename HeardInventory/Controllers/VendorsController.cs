using Microsoft.AspNetCore.Mvc;
using HeardInventory.Models;
using System.Collections.Generic;
using System.Linq;

namespace HeardInventory.Controllers
{
  public class VendorsController : Controller
  {
    private readonly HeardInventoryContext _db;

    public VendorsController(HeardInventoryContext db)
    {
      _db = db;
    }

    public ActionResult Index()
    {
      List<Vendor> model = _db.Vendors.ToList();
      return View(model);
    }
  }
}