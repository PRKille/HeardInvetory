using System;
using Npgsql;
using HeardInventory;
using Microsoft.EntityFrameworkCore;

namespace HeardInventory.Models
{
  public class HeardInventoryContext : DbContext
  {
    public DbSet<Item> Items {get;set;}
    public DbSet<Category> Categories {get;set;}
    public DbSet<Vendor> Vendors {get;set;}
    public DbSet<Audit> Audits {get;set;}
    public HeardInventoryContext(DbContextOptions<HeardInventoryContext> options) : base(options)
    {

    }
  }
}