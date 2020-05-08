namespace HeardInventory.Models
{
  public class Item
  {
    public int ItemId {get;set;}
    public string Name {get;set;}
    public string Category {get;set;}
    public int CategoryId {get;set;}
    public string Vendor {get;set;}
    public int VendorId {get;set;}
    public int PurchasePrice {get;set;}
    public string PurchaseQuantity {get;set;}
    public int StartingInventory {get;set;}
    public int CurrentInventory {get;set;}
  }
}