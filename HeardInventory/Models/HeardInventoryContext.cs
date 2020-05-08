using System;
using Npgsql;
using HeardInventory;
using Microsoft.EntityFrameworkCore;

namespace HeardInventory.Models
{
  public class HeardInventoryContext : DbContext
  {
    public DbSet<Item> Item {get;set;} 
    public HeardInventoryContext(DbContextOptions<HeardInventoryContext> options) : base(options)
    {

    }
  }
}