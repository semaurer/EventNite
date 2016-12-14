import React from 'react';

class CategoryExtension extends React.Component {
  constructor(props){
    super(props);
    this.state = { subEls: false, parentId: null };
    this.parentCatEls = this.parentCatEls.bind(this);
    this.updateSubsToggle = this.updateSubsToggle.bind(this);
    this.subCatEls = this.subCatEls.bind(this);
  }

  updateSubsToggle(e) {
    this.props.categories.forEach(category => {
      if (category.name === e.currentTarget.value) {
        this.setState({ parentId: category.id });
      }
    });

    if (e.currentTarget.value !== "Select a topic") {
      this.setState({ subEls: true });
    } else {
      this.setState({ subEls: false });
    }
  }

  parentCatEls() {
    const parentEls = [];
    this.props.categories.forEach(category => {
      if (category.parent_category_id === null) {
        parentEls.push(<option key={ category.id }>{ category.name }</option>);
      }
    });
    return parentEls;
  }

  subCatEls() {
    const parentId = this.state.parentId;
    const subEls = [];
    this.props.categories.forEach(category => {
      if (category.parent_category_id !== null) {
        if (category.parent_category_id === parentId) {
          subEls.push(<option key={ category.id }>{ category.name }</option>);
        }
      }
    });

    return (
      <span className="sub-topic">
        <h3>EVENT SUB-TOPIC</h3>
        <select className="sub-topic-select">
          <option>Select a sub-topic</option>
          { subEls }
        </select>
      </span>
    );
  }

  render () {
    const parentCatEls = this.parentCatEls();
    let subCatEls = "";
    if (this.state.subEls !== false) {
      subCatEls = this.subCatEls();
    }

    return (
      <div className="additional-settings">
        <span className="topics">
          <h3>EVENT TOPIC</h3>
          <select className="topic-select"
            onChange={ this.updateSubsToggle }>
            <option>Select a topic</option>
            { parentCatEls }
          </select>
          { subCatEls }
        </span>
      </div>
    );

  }
}

export default CategoryExtension;
