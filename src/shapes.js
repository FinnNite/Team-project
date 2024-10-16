import "./css/shapes.css"
import { useEffect, useState, useRef } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

// Прямоугольник
export const Rectangle = () => {
    // Сохраняем объект в ref
    const ref = useRef(null);
    // Состояние переноса прямоугольника
    const [isDragging, setIsDragging] = useState(false);
  
    // Эффект при переносе прямоугольника
    useEffect(() => {
      const rectE1 = ref.current;
      invariant(rectE1);
  
      return draggable({
        element: rectE1,
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      });
    });
  
    return (
      <div
        ref={ref}
        className={`rectangle ${isDragging ? "dragging" : ""}`} 
      />
    );
  }
  
// Овал
export const Oval = () => {
  // Сохраняем объект в ref
    const ref = useRef(null);
    // Состояние переноса овала
    const [isDragging, setIsDragging] = useState(false);
  
    // Эффект при переносе овала
    useEffect(() => {
      const ovalE1 = ref.current;
      invariant(ovalE1);
  
      return draggable({
        element: ovalE1,
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      });
    });
  
    return (
      <div
        ref={ref}
        className={`oval ${isDragging ? "dragging" : ""}`}
      />
    )
}

// Стрелка
export const Arrow = () => {
  // Сохраняем объект в ref
    const ref = useRef(null);
    // Состояние переноса стрелки
    const [isDragging, setIsDragging] = useState(false);
  
    // Эффект при переносе стрелки
    useEffect(() => {
      const arrowE1 = ref.current;
      invariant(arrowE1);
  
      return draggable({
        element: arrowE1,
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      });
    });
  
    return (
      <div
        ref={ref}
        className={`arrow ${isDragging ? "dragging" : ""}`}
      />
    )
}