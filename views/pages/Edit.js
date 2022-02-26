// Daniela Olarte Borja || David Montaño
let Edit = {
    render: async () => {
        return /*html*/ `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="id_input" type="text">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="title_input" type="text">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="content_input" type="text">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="author_input" type="text">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="update_btn">
                        Modify
                        </button>
                    </p>
                </div>
            </section>
        `
    }

    , after_render: async () => {
        let id = document.getElementById("id_input");
        let title = document.getElementById("title_input");
        let content = document.getElementById("content_input");
        let author = document.getElementById("author_input");
        id.value = data["Post Id"];
        title.value = data["Post Title"];
        content.value = data["Post Content"];
        author.value = data["Post Author"];
        document.getElementById("update_btn").addEventListener ("click",  () => {
            if (id.value != "" && title.value != "" && content.value != "" && author.value != "") {
                alert("Data has been modified");
                location.href = "#/";
            } else {
                alert("Fill out the spaces");
            }
        })
    }
}