using System;
using System.Linq;
using System.Collections.Generic;
using System.Data.SqlClient;
using Newtonsoft.Json.Linq;
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

    [EnableCors("MyPolicy")]
    [HttpPut]
    public void Put([FromBody] JArray inventory)
    {
      foreach (JObject audit in inventory)
      {
        int AuditId = Int32.Parse(audit.GetValue("AuditId").ToString());
        string ItemName = audit.GetValue("ItemName").ToString();
        int ItemId = Int32.Parse(audit.GetValue("ItemId").ToString());
        int PurchasePrice = Int32.Parse(audit.GetValue("PurchasePrice").ToString());
        int StartingInventory = Int32.Parse(audit.GetValue("StartingInventory").ToString());
        int CurrentInventory = Int32.Parse(audit.GetValue("CurrentInventory").ToString());
        int ItemPurchases = Int32.Parse(audit.GetValue("ItemPurchases").ToString());
        Audit updatedAudit = new Audit();
        updatedAudit.AuditId = AuditId;
        updatedAudit.ItemName = ItemName;
        updatedAudit.ItemId = ItemId;
        updatedAudit.PurchasePrice = PurchasePrice;
        updatedAudit.StartingInventory = StartingInventory;
        updatedAudit.CurrentInventory = CurrentInventory;
        updatedAudit.ItemPurchases = ItemPurchases;
        _db.Entry(updatedAudit).State = EntityState.Modified;
      }
      _db.SaveChanges();
    }

    [EnableCors("MyPolicy")]
    [HttpPut("finalize")]
    public void Finalize([FromBody] JArray newInventory)
    {
      Console.WriteLine("NEW INVENTORY: "+newInventory);
      foreach(JObject value in newInventory)
      {
        int AuditId = Int32.Parse(value.GetValue("AuditId").ToString());
        string ItemName = value.GetValue("ItemName").ToString();
        int ItemId = Int32.Parse(value.GetValue("ItemId").ToString());
        int PurchasePrice = Int32.Parse(value.GetValue("PurchasePrice").ToString());
        int NewStartingInventory = Int32.Parse(value.GetValue("CurrentInventory").ToString());
        int CurrentInventory = Int32.Parse(value.GetValue("CurrentInventory").ToString());
        int ItemPurchases = Int32.Parse(value.GetValue("ItemPurchases").ToString());
        Audit updatedAudit = new Audit();
        updatedAudit.AuditId = AuditId;
         updatedAudit.ItemName = ItemName;
        updatedAudit.ItemId = ItemId;
        updatedAudit.PurchasePrice = PurchasePrice;
        updatedAudit.StartingInventory = NewStartingInventory;
        updatedAudit.CurrentInventory = CurrentInventory;
        updatedAudit.ItemPurchases = ItemPurchases;
        _db.Entry(updatedAudit).State = EntityState.Modified;
      }
      _db.SaveChanges();
    }
  }
}