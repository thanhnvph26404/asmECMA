import { useEffect, router } from "../../lib";
// import { projects } from "../../data";
import axios from "axios";

const AdminAddGallery = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const img = document.getElementById("img")
        form.addEventListener("submit", async function (e) {
            // Chặn sự kiện reload sau khi submit
            e.preventDefault();
            // thêm phần tử vào mảng projects
            const urls = await uploadFiles(img.files)
            
            const formData = {
                
                gallery: urls
            };
           
            fetch("http://localhost:3000/gallery  ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // '{"a": "10"}'
            }).then(() => router.navigate("/admin/gallery"));

            // console.log()
            // chuyển hướng về trang admin/projects
        });

        const uploadFiles = async (files) => { 
            const CLOUD_NAME = 'dddygcddq'
            const PRESET_NAME = 'uploadImg'
            const urls = []
            const FOLDER_NAME = 'ECMA'
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
            const formData = new FormData()
            formData.append("upload_preset", PRESET_NAME)
            formData.append("folder", FOLDER_NAME)

            for (const file of files) {
                formData.append('file', file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                urls.push(response.data.secure_url)
                console.log(urls)
            }
            return urls
        }
    });
    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" />
                        <input type="file" class="form-control" id="img" />
                    </div>
                    <button class="btn btn-primary">Thêm</button>
                </form>
    </div>`;
};

export default AdminAddGallery;
