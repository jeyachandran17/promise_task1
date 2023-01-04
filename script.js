
var create_container = document.createElement('div');
create_container.setAttribute("class","container");

var row = document.createElement("div")
row.setAttribute("class","row")

create_container.append(row);

function cat_details(){
    let data = fetch("https://cataas.com/api/cats?tags=cute")
    .then((data)=>data.json())
        .then((data)=>{
            // console.log(data);
            var head = "Cat details";
            row.innerHTML+=`<div class="row">
            <label class="header">${head}</label>
            </div><hr>`;
            document.body.append(create_container);
            for(var i in data){
                var id = data[i]._id;
                var owner = data[i].owner;
                var tags = data[i].tags;
                console.log(`${id} || ${owner} || ${tags}`);
                row.innerHTML += ` <div class="col-lg-4, col-sm-12" id="card">
                <label for="cat_id" class="details">Cat_ID : ${id}</label><br>
                <label for="owner" class="details">Owner : ${owner}</label><br>
                <label for="tags" class="details">Tags : ${tags}</label><br>
                </div>`;
                document.body.append(create_container);
            }
        })
}

async function cat(){
    try{
        var cat_data = await cat_details();
    }catch(e){
        console.log(e);
    }
}
cat()

