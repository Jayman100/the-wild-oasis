import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  //1. Create cabin
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  //https://uzanwwhvcaizmfrympkf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  //2. If cabin is created succcessfully then Upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. If the image for some reason fail to upload then
  //the cabin should be deleted as well

  if (storageError) {
    const { error } = await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error("Cabin could not upload image so the cabin was deleted");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
