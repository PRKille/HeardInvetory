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

  public class AuditsController : Controller
  {
    private readonly HeardInventoryContext _db;

    public AuditsController(HeardInventoryContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult <IEnumerable<Audit>> Get()
    {
      return _db.Audits.ToList();
    }

    [EnableCors("MyPolicy")]
    [HttpPost]
    public void Post([FromBody] Audit audit)
    {
      _db.Audits.Add(audit);
      _db.SaveChanges();
    }
  }
}