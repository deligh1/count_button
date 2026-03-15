const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

exports.handler = async (event) => {

    if(event.httpMethod === "GET"){

        const { data } = await supabase
            .from("counter")
            .select("value")
            .eq("id",1)
            .single();

        return {
            statusCode:200,
            body:JSON.stringify({total:data.value})
        };
    }

    if(event.httpMethod === "POST"){

        const { data } = await supabase
            .from("counter")
            .select("value")
            .eq("id",1)
            .single();

        const newValue = data.value + 1;

        await supabase
            .from("counter")
            .update({value:newValue})
            .eq("id",1);

        return {
            statusCode:200,
            body:JSON.stringify({total:newValue})
        };
    }

};