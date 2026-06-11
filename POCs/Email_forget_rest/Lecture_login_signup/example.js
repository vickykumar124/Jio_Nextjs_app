const bcrypt=require("bcrypt");
const password="10";


async function create(){
    console.time();
    const randomSalt=await bcrypt.genSalt(15);
    const hash=await bcrypt.hash(password,randomSalt);
    const isTheSameorNot=await bcrypt.compare(password,hash);
    console.timeEnd();
    console.log("hashed password",hash)
}
create();