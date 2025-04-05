import React, { useState, useEffect } from "react";
import CommentItem from "../components/CommentItem";
import { useParams } from "react-router-dom"; // Импортируем хук для получения параметров URL
import '../styles/styles_rad.css';

function CommentsContainerRad() {    
    const { id } = useParams(); // Получаем tourId из URL
    const tourId = parseInt(id); // Преобразуем в число
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!tourId || isNaN(tourId)) {
            setError("Некорректный ID тура");
            setLoading(false);
            return;
        }

        const fetchComments = async () => {
            try {
                const response = await fetch(`https://localhost:7199/api/Tour/${tourId}/comments`);
                
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки: ${response.status}`);
                }
                
                const data = await response.json();
                setComments(data);
            } catch (err) {
                console.error('Ошибка:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [tourId]);

    if (loading) return <div className="loading">Загрузка комментариев...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;

    return (       
        <div className="comments-container_rad">
            {comments.length > 0 ? (
                <>
                    {comments.map(comment => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))}
                </>
            ) : (
                <p>Пока нет комментариев для этого тура.</p>
            )}
        </div>
    );
}

export default CommentsContainerRad;