var ukaidyjsmsplusrevivalClient;
document.addEventListener("deviceready", function () {
    ukaidyjsmsplusrevivalClient = new WindowsAzure.MobileServiceClient(
                    "https://ukaidyjsmsplusrevival.azurewebsites.net");
});