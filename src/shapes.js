import './css/shapes.css'
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';


export const Rectangle = () => {
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
  
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
  
export const Oval = () => {
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
  
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

export const Arrow = () => {
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
  
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