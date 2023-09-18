import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function ShowMore() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState(10);
    const containerRef = useRef(null)

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

    const showMoreItem = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
    }

    const handleScroll = () => {
        if (containerRef.current && containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight) {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
        }
    }

    useEffect(() => {

        let currentContainer = containerRef.current

        if (currentContainer) {
            currentContainer.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (currentContainer) {
                currentContainer.removeEventListener('scroll',handleScroll)
            }
        }
    },[])

    return (
        <div className="container" ref={containerRef}>
            <h1>Загруженные данные: </h1>
            {isLoading ? (
                <p>Загрузка данных...</p>
            ) : (
                <ul>
                    {data.slice(0, visibleItems).map((item) => (
                        <li key={item.id}>
                            {item.userId} {item.title}
                        </li>
                    ))}
                </ul>
            )}
            {visibleItems < data.length && (
                    <button onClick={showMoreItem}>Show More</button>
                )}
        </div>
    );
}

export default ShowMore