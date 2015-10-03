if (Meteor.isServer) {
  Meteor.startup(function () {
    
    db = new Neo4jDB(
      "http://localhost:7474"
    , { username: "neo4j"
      , password: "1234"
      }
    )

    if (!db._ready) {
      console.log("Database is not available. Doing nothing")
      return
    }

    var query = "WITH TIMESTAMP() AS timestamp CREATE (node:Group {name: 'name1'}) RETURN node"
    var result = db.query(query)
    console.log(result)

    // Please test the following query in the Neo4j browser at
    // localhost:7474, to ensure that it is a valid Cypher query
    // that creates a node named 'name2' with the label "Group".
    // 
    // When you are sure that it should work, uncomment the lines
    // below and save this file. The Meteor server should restart...
    // and then crash. The output from the Terminal is shown below.
    
    // query = "WITH TIMESTAMP() AS timestamp CREATE node = (:Group {name: 'name2'}) RETURN node"
    // result = db.query(query)
    // console.log(result)
  });
}

// v2.2.5            
// Successfully connected to Neo4j on http://localhost:7474
// { _cursor: [ { node: [Object] } ],
//  length: 1,
//  _current: 0,
//  hasNext: false,
//  hasPrevious: false }
// => Meteor server restarted
// v2.2.5            
// Successfully connected to Neo4j on http://localhost:7474
// { _cursor: [ { node: [Object] } ],
//  length: 1,
//  _current: 0,
//  hasNext: false,
//  hasPrevious: false }
 
// (STDERR) 
// (STDERR) /Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/helpers.js:45
// (STDERR)       }).run();
// (STDERR)          ^
// (STDERR) TypeError: Cannot read property 'id' of undefined
// (STDERR)     at Neo4jRelationship.<anonymous> (/Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/relationship.js:41:65)
// (STDERR)     at Neo4jRelationship.emit (events.js:95:17)
// (STDERR)     at new Neo4jRelationship (/Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/relationship.js:49:16)
// (STDERR)     at Neo4jDB.module.exports.Neo4jDB.__parseRow (/Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/driver.js:408:32)
// (STDERR)     at Neo4jDB.module.exports.Neo4jDB.__parseResponse (/Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/driver.js:428:23)
// (STDERR)     at Neo4jDB.module.exports.Neo4jDB.__transformData (/Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/driver.js:442:43)
// (STDERR)     at /Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/driver.js:219:69
// (STDERR)     at /Users/james/.meteor/packages/ostrio_neo4jdriver/.1.0.2-fiber.13z1de3++os.linux.x86_64+os.osx.x86_64+web.browser+web.cordova/npm/node_modules/neo4j-fiber/lib/helpers.js:44:16
// => Exited with code: 8
                               
