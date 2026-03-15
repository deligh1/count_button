let count = 0;

exports.handler = async (event) => {

    if(event.httpMethod === "POST"){
        count++;
    }

    return {
        statusCode:200,
        body: JSON.stringify({
            total: count
        })
    };
};