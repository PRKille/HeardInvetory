using System.Collections.Generic;

namespace HeardInventory.Models
{
  public class Category
  {
    public Category()
    {
      this.Items = new HashSet<Item>();
    }
    public int CategoryId {get;set;}
    public string CategoryName {get;set;}
    public virtual ICollection<Item> Items {get;set;}
  }
}