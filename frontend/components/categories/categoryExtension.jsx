import React from 'react';

class CategoryExtension extends React.Component {
  state = { showSubCategories: false, parentCategoryId: null };

  updateSubCategoryId = (e) => {
    const { categories, setSubCategoryId } = this.props;

    categories.forEach(category => {
      if (category.name === e.currentTarget.value) setSubCategoryId(category.id);
    });
  }

  updateSubCategoriesToggle = (e) => {
    const { categories, setParentCategoryId } = this.props;

    categories.forEach(category => {
      if (category.name === e.currentTarget.value) {
        this.setState({ parentCategoryId: category.id });
        setParentCategoryId(category.id);
      }
    });

    if (e.currentTarget.value !== "Select a topic") {
      this.setState({ showSubCategories: true });
    } else {
      this.setState({ showSubCategories: false });
    }
  }

  renderParentCategories = () => {
    const parentCategories = [];

    this.props.categories.forEach(category => {
      if (!category.parent_category_id) {
        parentCategories.push(<option key={ category.id }>{ category.name }</option>);
      }
    });
    return parentCategories;
  }

  renderSubCategories = () => {
    const subCategories = [];

    this.props.categories.forEach(category => {
      if (category.parent_category_id === this.state.parentCategoryId) {
        subCategories.push(<option key={ category.id }>{ category.name }</option>);
      }
    });

    return (
      <span className="sub-topic">
        <h3>EVENT SUB-TOPIC</h3>
        <select onChange={ this.updateSubCategoryId } className="sub-topic-select">
          <option>Select a sub-topic</option>
          { subCategories }
        </select>
      </span>
    );
  }

  render () {
    return (
      <div className="additional-settings">
        <span className="topics">
          <h3>EVENT TOPIC</h3>
          <select className="topic-select" onChange={ this.updateSubCategoriesToggle }>
            <option>Select a topic</option>
            { this.renderParentCategories() }
          </select>
          { this.state.showSubCategories ? this.renderSubCategories : null }
        </span>
      </div>
    );
  }
}

export default CategoryExtension;
