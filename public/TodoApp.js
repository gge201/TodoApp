'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.handleAddTodo = _this.handleAddTodo.bind(_this);
        _this.handleToggleTodo = _this.handleToggleTodo.bind(_this);
        _this.handleDeleteTodo = _this.handleDeleteTodo.bind(_this);
        _this.handleDeleteAllTodo = _this.handleDeleteAllTodo.bind(_this);
        _this.handleUpTodo = _this.handleUpTodo.bind(_this);
        _this.handleDownTodo = _this.handleDownTodo.bind(_this);
        _this.handleMarkAllTodo = _this.handleMarkAllTodo.bind(_this);
        _this.handleUnmarkAllTodo = _this.handleUnmarkAllTodo.bind(_this);
        _this.handleEditTodo = _this.handleEditTodo.bind(_this);
        _this.state = {
            todo: []
        };
        return _this;
    }

    _createClass(TodoApp, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var json = JSON.stringify(this.state.todo);
            localStorage.setItem('todo', json);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var todo = JSON.parse(localStorage.getItem('todo')) || [];
            this.setState(function () {
                return { todo: todo };
            });
        }
    }, {
        key: 'handleMarkAllTodo',
        value: function handleMarkAllTodo() {
            var _this2 = this;

            var count = 0;
            this.state.todo.map(function (item) {
                if (!item.complete) {
                    count++;
                    _this2.handleToggleTodo(item.text);
                }
            });
            if (count === 0) {
                alert('No elements to Mark');
            }
        }
    }, {
        key: 'handleEditTodo',
        value: function handleEditTodo(updateText, Text) {
            this.setState(function (prevState) {
                prevState.todo.map(function (item) {
                    if (item.text === Text) {
                        item.text = updateText;
                    }
                });
                return {
                    todo: prevState.todo
                };
            });
        }
    }, {
        key: 'handleUnmarkAllTodo',
        value: function handleUnmarkAllTodo() {
            var _this3 = this;

            var count = 0;
            this.state.todo.map(function (item) {
                if (item.complete) {
                    count++;
                    _this3.handleToggleTodo(item.text);
                }
            });
            if (count === 0) {
                alert('No elements to Unmark');
            }
        }
    }, {
        key: 'handleUpTodo',
        value: function handleUpTodo(Text) {
            var index = -1;
            this.state.todo.map(function (value, pos) {
                if (value.text === Text) {
                    index = pos;
                }
            });
            this.setState(function (prevState) {
                if (index === 0) {
                    var element = prevState.todo[prevState.todo.length - 1];
                    prevState.todo[prevState.todo.length - 1] = prevState.todo[index];
                    prevState.todo[index] = element;
                } else {
                    var _element = prevState.todo[index - 1];
                    prevState.todo[index - 1] = prevState.todo[index];
                    prevState.todo[index] = _element;
                }
                return {
                    todo: prevState.todo
                };
            });
        }
    }, {
        key: 'handleDownTodo',
        value: function handleDownTodo(Text) {
            var index = -1;
            this.state.todo.map(function (value, pos) {
                if (value.text === Text) {
                    index = pos;
                }
            });
            this.setState(function (prevState) {
                if (index === prevState.todo.length - 1) {
                    var element = prevState.todo[0];
                    prevState.todo[0] = prevState.todo[index];
                    prevState.todo[index] = element;
                } else {
                    var _element2 = prevState.todo[index + 1];
                    prevState.todo[index + 1] = prevState.todo[index];
                    prevState.todo[index] = _element2;
                }
                return {
                    todo: prevState.todo
                };
            });
        }
    }, {
        key: 'handleDeleteAllTodo',
        value: function handleDeleteAllTodo() {
            if (this.state.todo.length === 0) {
                alert('No elements to delete');
                return;
            }
            this.setState(function () {
                return { todo: [] };
            });
        }
    }, {
        key: 'handleToggleTodo',
        value: function handleToggleTodo(Text) {
            this.setState(function (prevState) {
                return {
                    todo: prevState.todo.filter(function (item) {
                        if (item.text === Text) {
                            item.complete = !item.complete;
                        }
                        return item;
                    })
                };
            });
        }
    }, {
        key: 'handleAddTodo',
        value: function handleAddTodo(Text) {
            var isPresent = 0;
            this.state.todo.map(function (item) {
                if (item.text === Text) {
                    alert('Add something else. Already in the list');
                    isPresent = 1;
                    return;
                }
            });
            if (isPresent) {
                return;
            }
            this.setState(function (prevState) {
                return {
                    todo: prevState.todo.concat([{ text: Text, complete: false }])
                };
            });
        }
    }, {
        key: 'handleDeleteTodo',
        value: function handleDeleteTodo(Text) {
            this.setState(function (prevState) {
                return {
                    todo: prevState.todo.filter(function (item) {
                        if (item.text != Text) {
                            return item;
                        }
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { handleAddTodo: this.handleAddTodo }),
                React.createElement(List, { handleEditTodo: this.handleEditTodo, handleUpTodo: this.handleUpTodo, handleDownTodo: this.handleDownTodo, handleDeleteTodo: this.handleDeleteTodo, todo: this.state.todo, handleToggleTodo: this.handleToggleTodo }),
                React.createElement(ActionBar, { handleMarkAllTodo: this.handleMarkAllTodo, handleUnmarkAllTodo: this.handleUnmarkAllTodo, handleDeleteAllTodo: this.handleDeleteAllTodo })
            );
        }
    }]);

    return TodoApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this4 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this4.addTodo = _this4.addTodo.bind(_this4);
        return _this4;
    }

    _createClass(Header, [{
        key: 'addTodo',
        value: function addTodo(e) {
            e.preventDefault();
            this.props.handleAddTodo(e.target.elements.element.value);
            e.target.elements.element.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addTodo },
                    React.createElement('input', {
                        type: 'text',
                        className: 'giveInput',
                        placeholder: 'Add Something',
                        name: 'element' }),
                    React.createElement(
                        'button',
                        {
                            className: 'button3' },
                        '+'
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var List = function (_React$Component3) {
    _inherits(List, _React$Component3);

    function List(props) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            console.log(this.props.todo);
            return React.createElement(
                'div',
                null,
                this.props.todo.map(function (item) {
                    return React.createElement(Item, {
                        handleEditTodo: _this6.props.handleEditTodo,
                        key: item.text,
                        todo: item,
                        handleToggleTodo: _this6.props.handleToggleTodo,
                        handleDeleteTodo: _this6.props.handleDeleteTodo,
                        handleUpTodo: _this6.props.handleUpTodo,
                        handleDownTodo: _this6.props.handleDownTodo });
                })
            );
        }
    }]);

    return List;
}(React.Component);

var Item = function (_React$Component4) {
    _inherits(Item, _React$Component4);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this7 = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

        _this7.checkBox = _this7.checkBox.bind(_this7);
        _this7.onDelete = _this7.onDelete.bind(_this7);
        _this7.handleEditContent = _this7.handleEditContent.bind(_this7);
        _this7.upTodo = _this7.upTodo.bind(_this7);
        _this7.downTodo = _this7.downTodo.bind(_this7);
        return _this7;
    }

    _createClass(Item, [{
        key: 'checkBox',
        value: function checkBox(e) {
            this.props.handleToggleTodo(this.props.todo.text);
        }
    }, {
        key: 'onDelete',
        value: function onDelete() {
            this.props.handleDeleteTodo(this.props.todo.text);
        }
    }, {
        key: 'upTodo',
        value: function upTodo() {
            this.props.handleUpTodo(this.props.todo.text);
        }
    }, {
        key: 'downTodo',
        value: function downTodo() {
            this.props.handleDownTodo(this.props.todo.text);
        }
    }, {
        key: 'handleEditContent',
        value: function handleEditContent(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (e.target.innerText === '') {
                    alert('Enter Something please');
                    return;
                }
                this.props.handleEditTodo(e.target.innerText, this.props.todo.text);
                e.target.contentEditable = false;
                e.target.contentEditable = true;
                e.target.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    { className: 'LI' },
                    React.createElement('input', { type: 'checkbox', name: 'check', checked: this.props.todo.complete, className: 'check', onClick: this.checkBox }),
                    React.createElement(
                        'span',
                        { onKeyDown: this.handleEditContent, className: !this.props.todo.complete ? "editable" : "non-editable", contentEditable: !this.props.todo.complete },
                        ' ',
                        this.props.todo.text
                    ),
                    React.createElement('button', { className: 'fa fa-arrow-up', onClick: this.upTodo }),
                    React.createElement('button', { className: 'fa fa-arrow-down', onClick: this.downTodo }),
                    React.createElement(
                        'button',
                        { className: 'fa fa-trash', onClick: this.onDelete },
                        '  '
                    )
                )
            );
        }
    }]);

    return Item;
}(React.Component);

var ActionBar = function (_React$Component5) {
    _inherits(ActionBar, _React$Component5);

    function ActionBar() {
        _classCallCheck(this, ActionBar);

        return _possibleConstructorReturn(this, (ActionBar.__proto__ || Object.getPrototypeOf(ActionBar)).apply(this, arguments));
    }

    _createClass(ActionBar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteAllTodo, className: 'button3' },
                    'Delete All'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.handleMarkAllTodo, className: 'button3' },
                    'Mark All'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.handleUnmarkAllTodo, className: 'button3' },
                    ' Unmark All'
                )
            );
        }
    }]);

    return ActionBar;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));
