namespace HeardInventory.Models
{
  public class Audit
  {
    public int AuditId {get;set;}
    public string ItemName {get;set;}
    public int ItemId {get;set;}
    public int PurchasePrice {get;set;}
    public int StartingInventory {get;set;}
    public int CurrentInventory {get;set;}
    public int ItemPurchases {get;set;}
  }
}