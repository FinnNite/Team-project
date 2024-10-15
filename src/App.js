import './css/App.css';
import './css/shapes.css';
import { useEffect, useState, useRef } from 'react';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"; // NEW
import { attachClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"; // NEW
import lupa from "./image/lupa.png";
import table from "./image/table.png";
import copy from "./image/copy.png";
import invariant from 'tiny-invariant';

function App() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      <ToolbarContainer />
      <RightbarContainer />
      <WorkspaceContainer />
    </>
  );
}

function HeaderContainer() {
  return ( 
    <header class="header container">
    <span class="logo">Логотип</span>
    <nav>
      <ul>
        <li><a href="#">Имя файла</a></li>
        <li><a href="#">Файл</a></li>
        <li><a href="#">Поделиться</a></li>
        <li><a href="#">Экспортировать</a></li>
        <li><a href="#">Вид</a></li>
        <li><a href="#">Настройки</a></li>
      </ul>
    </nav>
    </header>
  );
}

function SearchContainer() {
  return (
    <div class="search container">
    <input type="text" />
    <img src={lupa} alt="Лупа" />
  </div>
  );
}

function ToolbarContainer() {
  return (
    <div class="toolbar container">
			<nav class="tools">
				<h3>Класс 1</h3>
				<ul class="tools">
					<Rectangle />
					<Oval />
					<li>Стрелка</li>
				</ul>
				<h3>Класс 2</h3>
				<ul class="tools">
					<li>Треугольник</li>
					<li>Элемент 5</li>
					<li>Элемент 6</li>
					<li>Элемент 7</li>
					<li>Элемент 8</li>
				</ul>
			</nav>
		</div>
  );
}

function RightbarContainer() {
  return (
		<div class="rightbar container">
    <nav>
      <img src={copy} alt="Копировать" />
      <img src={table} alt="Таблица" />
      <img src={lupa} alt="Лупа" />
    </nav>
  </div>
  );
}

function WorkspaceContainer({columnId, title, rects}) {
  const spaceRef = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const spaceE1 = spaceRef.current;
    invariant(spaceE1);

    return dropTargetForElements({
        element: spaceE1,
        onDragStart: () => setIsDraggedOver(true),
        onDragEnter: () => setIsDraggedOver(true),
        onDragLeave: () => setIsDraggedOver(false),
        onDrop: () => setIsDraggedOver(false),
        getData: () => ({ columnId }),
        getIsSticky: () => true,
    });
  }, [columnId]);
  return (
    <div ref={spaceRef} 
    class="workspace container">
    </div>
  );
}

const Rectangle = (children, ...rect) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const rectE1 = ref.current;
    invariant(rectE1);

    return combine(
      draggable({
      element: rectE1,
      getInitialData: () => ({ type: "rectangle", rectId: rect.id }), 
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    }),
    dropTargetForElements({
      element: rectE1,
      getData: ({ input, element }) => {
        const data = { type: "rectangle", rectId: rect.id};

        return attachClosestEdge(data, {
          input,
          element,
          allowedEdges: ["top", "bottom"],
        });
      },
      getIsSticky: () => true,
      onDragEnter: (args) => {
        if (args.source.data.rectId != rect.id) {
          console.log("onDragEvent", args);
        }
      }
    })
  );
  }, [rect.id]);

  return (
    <div
      class="rectangle" 
      ref={ref}>
    </div>
  );
}

const Oval = (children, ...oval) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const ovalE1 = ref.current;
    invariant(ovalE1);

    return combine(
      draggable({
      element: ovalE1,
      getInitialData: () => ({ type: "oval", ovalId: oval.id }), 
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    }),
    dropTargetForElements({
      element: ovalE1,
      getData: ({ input, element }) => {
        const data = { type: "oval", ovalId: oval.id};

        return attachClosestEdge(data, {
          input,
          element,
          allowedEdges: ["top", "bottom"],
        });
      },
      getIsSticky: () => true,
      onDragEnter: (args) => {
        if (args.source.data.ovalId != oval.id) {
          console.log("onDragEvent", args);
        }
      }
    })
  );
  }, [oval.id]);

  return (
    <div
      ref={ref}
      class="oval"></div>
  )
}

export default App;
