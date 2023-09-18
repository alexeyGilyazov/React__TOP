import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HookEffect() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных: ", error);
                setIsLoading(false);
            });
    }, []);

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <h1>Загруженные данные: </h1>
            {isLoading ? (
                <p>Загрузка данных...</p>
            ) : (
                <ul>
                    {currentItems.map((item) => (
                        <li key={item.id}>
                            {item.userId} {item.title}
                        </li>
                    ))}
                </ul>
            )}

            <div className="pagination">
                {data.length > itemPerPage && (
                    <ul className="paginationList">
                        {Array.from(
                            { length: Math.ceil(data.length / itemPerPage) },
                            (_, index) => (
                                <li
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={currentPage === index + 1 ? "active" : ""}
                                >
                                    {index + 1}
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default HookEffect

