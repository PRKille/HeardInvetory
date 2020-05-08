namespace HeardInventory.Models
{
  public class Item
  {
    public int ItemId {get;set;}
    public string ItemName {get;set;}
    public virtual Category Category {get;set;}
    public int CategoryId {get;set;}
    public virtual Vendor Vendor {get;set;}
    public int VendorId {get;set;}
    public int PurchasePrice {get;set;}
    public string PurchaseQuantity {get;set;}
    public int StartingInventory {get;set;}
    public int CurrentInventory {get;set;}
  }
}