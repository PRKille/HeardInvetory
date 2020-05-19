using Microsoft.EntityFrameworkCore.Migrations;

namespace HeardInventory.Migrations
{
    public partial class RemoveInventoryFromItemsCreateAudit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentInventory",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "StartingInventory",
                table: "Items");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CurrentInventory",
                table: "Items",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartingInventory",
                table: "Items",
                nullable: false,
                defaultValue: 0);
        }
    }
}
