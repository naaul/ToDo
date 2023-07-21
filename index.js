const add = $("#add");
var num_of_row = 1;
generateRow(num_of_row);



function generateRow(ix) {
    return `<div class="row" id="row`+ ix +`">
    <div class="content">
        <input id="checkbox`+ ix +`" class="check" type="checkbox">
        <label for="checkbox" class="check-text"><input id="text-id`+ num_of_row +`" class="text" type="text" placeholder="Insira aqui sua tarefa"></label>
    </div>
    <svg class="delete" id="delete`+ ix +`" width="64px" height="64px" viewBox="0 0 1024 1024" fill="#DDDDDD" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill=""></path><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill=""></path><path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path></g></svg>
    </div>`;
}



add.on("click", () => {
    addRow()
});

function addRow () {
    var new_row = generateRow(num_of_row)
    $(new_row).insertBefore("#add");
    console.log(num_of_row);
    updateDel()
    num_of_row++;
}

updateDel()

function updateDel () {
    $(".row").children().off();
    $(".delete").on("click", (e) => {
        var index = ($(e.currentTarget).parent().index());
        removeItem(index)
    })
    $(".content").children().off();
    $(".check").on("click", (e) => {
        var index = ($(e.currentTarget).parent().parent().index());
        updateCheck(index);
    })
}



function removeItem (i) {
    $("#card .row:eq("+i+")").css({"display": "none"});
}


function updateCheck (i) {
    var this_check = $("#checkbox" + i);
    var its_text = this_check.next().children();

    switch (this_check.prop('checked')) {
        case true:
            its_text.css({"text-decoration": "line-through"});
            its_text.css({"text-decoration-color": "#98B695"});
            its_text.css({"text-decoration-style": "wavy"});
            console.log(this_check.prop('checked'));
            break


        case false:
            its_text.css({"text-decoration": "none"});
            console.log(this_check.prop('checked'));
            break
    
        default:
            console.log("switch error");
            console.log(this_check.prop('checked'));

    }
}


$(".delete-all").on("click", () => {
    $(".row").remove();
    num_of_row = 0;

})

