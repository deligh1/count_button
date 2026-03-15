const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {

  const { data } = await supabase
    .from("counter")
    .select("value")
    .eq("id",1)
    .maybeSingle();

  let value = data?.value ?? 0;

  if(event.httpMethod === "POST"){

    value++;

    await supabase
      .from("counter")
      .upsert({id:1,value:value});
  }

  return {
    statusCode:200,
    body:JSON.stringify({total:value})
  };
};