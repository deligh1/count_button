const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {

  const { data, error } = await supabase
    .from("counter")
    .select("value")
    .eq("id",1)
    .single();

  if(error){
    return {
      statusCode:500,
      body:JSON.stringify(error)
    };
  }

  let value = data.value;

  if(event.httpMethod === "POST"){

    value++;

    const { error:updateError } = await supabase
      .from("counter")
      .update({value:value})
      .eq("id",1);

    if(updateError){
      return {
        statusCode:500,
        body:JSON.stringify(updateError)
      };
    }

  }

  return {
    statusCode:200,
    body:JSON.stringify({total:value})
  };
};