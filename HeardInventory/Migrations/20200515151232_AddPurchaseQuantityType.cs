using Microsoft.EntityFrameworkCore.Migrations;

namespace HeardInventory.Migrations
{
    public partial class AddPurchaseQuantityType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PurchaseQuantity",
                table: "Items",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PurchaseQuantityType",
                table: "Items",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PurchaseQuantityType",
                table: "Items");

            migrationBuilder.AlterColumn<string>(
                name: "PurchaseQuantity",
                table: "Items",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
