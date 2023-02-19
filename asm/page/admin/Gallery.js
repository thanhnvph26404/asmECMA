import { useState, useEffect } from "../../lib";

const AdminGallery = () => {
    // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
    const [categories, setCategories] = useState([]);

    // Bước 3: Lấy dữ liệu từ localStorage và gán vào biến data
    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));

        // const projects = JSON.parse(localStorage.getItem("projects")) || [];
        // setData(projects);
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            // Viết sự kiện cho từng button remove
            btn.addEventListener("click", function () {
                // Lấy id từ data-id của button
                const id = btn.dataset.id;
                fetch(`http://localhost:3000/categories/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    // Lọc ra các phần tử có id khác với id của button
                    const newCategories = categories.filter((category) => category.id != id);
                    // Gán lại giá trị cho biến data
                    setCategories(newCategories);
                });
            });
        }
    });
    // Bước 2: Hiển thị ra ngoài màn hình
    return `<div class="container pt-5">
                <h1>Quản lý dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${categories
                            .map(function (project, index) {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                                    </td>
                                </tr>
                            `;
                            })
                            .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminGallery;