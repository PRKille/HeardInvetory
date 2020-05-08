# Heard Inventory Management and Pricing

#### _Epicodus Capstone Project_, _2020_

#### By _**Patrick Kille**_

## Description

Heard! is the next generation of restaurant inventory and pricing systems. Designed with the kitchen in mind, it will make short work of pricing from delivery to plate or bottle to glass.

## Specifications:

#### As a User I want to:
_For my overall inventory list:_
* Be able to add items to my inventory list, including name, type(produce, meat, etc), vendor, purchase price, purchase amount(weight, volume, number of items).
* Be able to view my inventory list as a whole, type, vendor, or individual items.
* Be able to delete items from my inventory list.
* Be able to update my inventory list to reflect changes in price/vendor/quantity etc.

_For auditing my inventory_
* Be able to input a starting on hand inventory.
* Be able to input goods purchased for the time between previous and current inventories.
* Be able to input current inventory levels.
* Be able to input total Food or Drink sales for the inventory period.
* Be able to view my current Food or Drink cost percentage based on audit numbers.
* Have current inventory stored as starting inventory for the next inventory cycle upon closing audit.

## Setup/Installation Requirements

### Install .NET Core

#### on macOS:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) to download a .NET Core SDK from Microsoft Corp._
* _Open the file (this will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.)_

#### on Windows:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer) to download the 64-bit .NET Core SDK from Microsoft Corp._
* _Open the .exe file and follow the steps provided by the installer for your OS._

#### Install dotnet script
_Enter the command ``dotnet tool install -g dotnet-script`` in Terminal (macOS) or PowerShell (Windows)._

### Install PostgreSQL

* _Follow the instructions found on the [PostgreSQL Tutorial](https://www.postgresqltutorial.com/install-postgresql/) page to download and verify installation of PostgreSQL.

### Clone this repository

_Enter the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``cd desktop``
* ``git clone`` followed by the name of this repository
* ``cd HeardInventory.Solution``

_Confirm that you have navigated to the Library.Solution directory (e.g., by entering the command_ ``pwd`` _in Terminal)._

_Recreate the ``patrick_kille`` database using the following commands (in Terminal on macOS or PowerShell on Windows):_
* ``dotnet ef database update``

_Run this application by entering the following command in Terminal (macOS) or PowerShell (Windows):_
* ``cd HeardInventory``
* ``dotnet restore``
* ``dotnet build``
* ``dotnet run`` or ``dotnet watch run``

_To view/edit the source code of this application, open the contents of the Library.Solution directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._

## Technologies Used

* C#
* ASP.NET Core MVC 2.2
* dotnet script
* Entity Framework Core 2.2
* Git

## License

No License currently offered.

&copy; 2020 - Patrick Kille