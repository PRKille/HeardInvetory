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
  public class VendorsController : Controller
  {
    private readonly HeardInventoryContext _db;

    public VendorsController(HeardInventoryContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult <IEnumerable<Vendor>> Get()
    {
      return _db.Vendors.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Vendor> Get(int id)
    {
      return _db.Vendors.FirstOrDefault(cat => cat.VendorId == id);
    }

    [EnableCors("MyPolicy")]
    [HttpPost]
    public void Post([FromBody] Vendor Vendor)
    {
      _db.Vendors.Add(Vendor);
      _db.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Vendor Vendor)
    {
      Vendor.VendorId = id;
      _db.Entry(Vendor).State = EntityState.Modified;
      _db.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      Vendor vendorForDeletion = _db.Vendors.FirstOrDefault(vendor => vendor.VendorId == id);
      _db.Vendors.Remove(vendorForDeletion);
      _db.SaveChanges();
    }
  }
}