using System.Collections.Generic;

namespace HeardInventory.Models
{
  public class Vendor
  {
    public Vendor()
    {
      this.Items = new HashSet<Item>();
    }
    public int VendorId {get;set;}
    public string VendorName {get;set;}
    public virtual ICollection<Item> Items {get;set;}
  }
}