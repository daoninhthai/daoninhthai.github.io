MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    db = client.db("t");
    console.log("Đã kết nối tới database travel")
})