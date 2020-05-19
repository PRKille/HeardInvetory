namespace HeardInventory.Models
{
  public class Item
  {
    public int ItemId {get;set;}
    public string ItemName {get;set;}
    public Category Category {get;set;}
    public int CategoryId {get;set;}
    public Vendor Vendor {get;set;}
    public int VendorId {get;set;}
    public int PurchasePrice {get;set;}
    public int PurchaseQuantity {get;set;}
    public string PurchaseQuantityType {get;set;}
    public int StartingInventory {get;set;}
    public int CurrentInventory {get;set;}
  }
}