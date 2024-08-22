import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import './Dashboard.css';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingWidgetId, setDraggingWidgetId] = useState(null);

  const addWidget = () => {
    const newWidget = {
      id: uuidv4(),
      title: 'New Widget',
      secondaryWidgets: [],
    };
    setWidgets([...widgets, newWidget]);
  };

  const handleTitleChange = (widgetId, newTitle) => {
    setWidgets(widgets.map(widget =>
      widget.id === widgetId ? { ...widget, title: newTitle } : widget
    ));
  };

  const addSubWidget = (parentWidgetId) => {
    const newSubWidget = {
      id: uuidv4(),
      content: '',
      type: 'placeholder', // For identifying placeholder state
    };
    setWidgets(widgets.map(widget =>
      widget.id === parentWidgetId
        ? {
            ...widget,
            secondaryWidgets: [...widget.secondaryWidgets, newSubWidget],
          }
        : widget
    ));
  };

  const handleSubWidgetContent = (parentWidgetId, subWidgetId, content, type) => {
    setWidgets(widgets.map(widget =>
      widget.id === parentWidgetId
        ? {
            ...widget,
            secondaryWidgets: widget.secondaryWidgets.map(sw =>
              sw.id === subWidgetId
                ? { ...sw, content, type }
                : sw
            ),
          }
        : widget
    ));
  };

  const handleImageUpload = (parentWidgetId, subWidgetId, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleSubWidgetContent(parentWidgetId, subWidgetId, reader.result, 'image');
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteWidget = (widgetId) => {
    setWidgets(widgets.filter(widget => widget.id !== widgetId));
  };

  const startDragging = (widgetId) => {
    setIsDragging(true);
    setDraggingWidgetId(widgetId);
  };

  const stopDragging = () => {
    setIsDragging(false);
    setDraggingWidgetId(null);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2>Dashboard</h2>
        <button className="add-widget-btn" onClick={addWidget}>
          Add Widget
        </button>
      </div>
      <div className="widgets-container">
        {widgets.map((widget) => (
          <Draggable
            key={widget.id}
            onStart={() => startDragging(widget.id)}
            onStop={stopDragging}
            disabled={!isDragging || draggingWidgetId !== widget.id}
          >
            <div className="widget" onDoubleClick={() => startDragging(widget.id)}>
              <input
                type="text"
                value={widget.title}
                onChange={(e) => handleTitleChange(widget.id, e.target.value)}
                className="widget-title"
              />
              <div className="secondary-widgets">
                {widget.secondaryWidgets.map((sw) => (
                  <div key={sw.id} className="secondary-widget">
                    {sw.type === 'placeholder' ? (
                      <>
                        <button
                          onClick={() => handleSubWidgetContent(widget.id, sw.id, 'Image and Text', 'content')}
                        >
                          Image and Text
                        </button>
                      </>
                    ) : (
                      <>
                        {sw.type === 'image' && (
                          <img src={sw.content} alt="Uploaded" className="uploaded-image" />
                        )}
                        <input
                          type="text"
                          value={sw.content}
                          onChange={(e) => handleSubWidgetContent(widget.id, sw.id, e.target.value, 'text')}
                          className="secondary-widget-content"
                          placeholder="Enter text"
                        />
                        {sw.type === 'content' && (
                          <div className="secondary-widget-image">
                            <input
                              type="file"
                              onChange={(e) => handleImageUpload(widget.id, sw.id, e)}
                              className="image-upload"
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={() => addSubWidget(widget.id)} className="add-sub-widget-btn">
                Add Widget
              </button>
            </div>
          </Draggable>
        ))}
      </div>
      {isDragging && (
        <div className="delete-area">
          <p>Drag widget here to delete</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
