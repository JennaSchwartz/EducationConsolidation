const CosmosClient = require("@azure/cosmos").CosmosClient;

module.exports = {
    getDatabaseClient: function()
    {
        // <CreateClientObjectDatabaseContainer>
      const connectionString = process.env.databaseConnectionString;
      const client = new CosmosClient(connectionString);
      const db = client.database("hackathon-db");
      return db;
    },

    getItems: async function(container)
    {
        const querySpec = {
            query: "SELECT * from c"
            };

        const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

        return items;
    },

    getItem: async function(container, id)
    {
        const querySpec = {
            query: "SELECT * from c WHERE c.id = \'" + id + "\'"
            };

        const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

        return items[0];
    },

    getGuardianPhoneNumbers: async function(dbClient, studentId)
    {
        var studentsClient = dbClient.container("students")
        student = await module.exports.getItem(studentsClient, studentId);
          
        var guardiansClient = dbClient.container("guardians");
        phoneNumbers = []

        for (const id of student.GuardianIds)
        {
            guardian = await module.exports.getItem(guardiansClient, id);
            phoneNumbers.push(guardian.PhoneNumber);
        }
        
        return phoneNumbers
    },

    retrieveAll: async function(dbClient, containerName)
    {
        var containerClient = dbClient.container(containerName);
        items = await module.exports.getItems(containerClient);0
        return items;
    },

    retrieve: async function(dbClient, containerName, itemId)
    {
        var containerClient = dbClient.container(containerName);
        item = await module.exports.getItem(containerClient, itemId);
        return item;
    },

    getGuardian: async function(dbClient, guardianId)
    {
        var containerClient = dbClient.container("guardians");
        var guardian = await module.exports.getItem(containerClient, guardianId)
        filteredInfo = {
            Name: guardian.Name,
            PreferredContactMethod: guardian.PreferredContactMethod,
            PhoneNumber: guardian.PhoneNumber,
            Email: guardian.Email,
            PreferredLanguage: guardian.PreferredLanguage
        };
        return filteredInfo;
    },

    updateGuardian: async function(dbClient, guardianId, guardianInfo)
    {
        var container = dbClient.container("guardians");
        existingGuardian = await module.exports.getItem(container, guardianId);
        var updatedGuardian = existingGuardian;

        updatedGuardian.Name = guardianInfo.Name;
        updatedGuardian.PreferredContactMethod = guardianInfo.PreferredContactMethod;
        updatedGuardian.PhoneNumber = guardianInfo.PhoneNumber;
        updatedGuardian.Email = guardianInfo.Email;
        updatedGuardian.PreferredLanguage = guardianInfo.PreferredLanguage;

        const { resource: updatedItem } = await container
            .item(guardianId, "1")
            .replace(updatedGuardian);
    },


    /*
    Sample Guardian:
    const newGuardian = {
        id: "5",
    }
    */
    insertGuardian: async function(dbClient, guardian)
    {
        var containerClient = dbClient.container('guardians');
        //Sample item
    }
}
