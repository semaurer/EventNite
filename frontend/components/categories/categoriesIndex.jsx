import React, { Component } from 'react';

class CategoriesIndex extends Component {
  state = { categoryMenu: "closed" };

  componentDidMount () {
    this.props.fetchCategories();
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname.includes("categories")) {
      if (nextProps.location.pathname === "events") {
        this.props.fetchEvents();
        this.setState({ categoryMenu: "closed" });
      }
    }
  }

  changeMenuState = (e) => {
    const { fetchEvents, removeEvents, resetSearch, router } = this.props;
    const { categoryMenu } = this.state;

    if (categoryMenu === "closed") {
      resetSearch();
      this.setState({ categoryMenu: "full" });
      router.push("events/categories");
    } else {
      this.setState({ categoryMenu: "closed" });
      router.push("/events");
      removeEvents();
      fetchEvents();
    }
  }

  renderCategories = () => {
    const { categoryMenu } = this.state;

    switch (categoryMenu) {
      case 'full':
        return this.renderFullCategoryMenu();
      case 'parentSelected':
        return this.renderParentCategoryMenu();
      case 'subSelected':
        return this.renderSubCategories();
      default:
        return null;
    }
  }

  renderFullCategoryMenu = () => {
    const { categories } = this.props;

    const allCategories = categories.map((category) => {
      if (!category.parent_category_id) {
        return (
          <div key={ category.id } className="non-active">
            <h4 onClick={ this.filterSelectedCategory } id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div className="all-categories">
        <h4>All Categories</h4>
        { allCategories }
      </div>
    );
  }

  filterSelectedCategory = (e) => {
    const { categoryFilterFetchEvents, removeEvents, router } = this.props;

    this.setState({ categoryMenu: "parentSelected" });
    router.push(`events/categories/${e.currentTarget.innerText}`);
    removeEvents();
    categoryFilterFetchEvents(e.currentTarget.id);
  }

  renderParentCategoryMenu = () => {
    const { categories, params } = this.props;

    let currentParentId = -1;
    const parentCategory = categories.map(category => {
      if (params.categoryName === category.name) {
        currentParentId = category.id;
        return (
          <div className="all-categories" key={ category.id }>
            <h4 id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    const childCategories = categories.map((category) => {
      if (currentParentId === category.parent_category_id) {
        return (
          <div className="non-active" key={ category.id }>
            <h4 onClick={ this.updateToSubCategory } id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div>
        <div onClick={ this.resetCategoriesMenu } className="non-active" />
        <h4>All Categories</h4>
        { parentCategory }
        { childCategories }
      </div>
    );
  }

  updateToSubCategory = (e) => {
    const { categories, categoryFilterFetchEvents, removeEvents, router } = this.props;
    let subCategory;
    let parentCategory;

    categories.forEach(category => {
      if (parseInt(e.currentTarget.id) === category.id) subCategory = category;
    });

    categories.forEach(category => {
      if (category.id === subCategory.parent_category_id) parentCategory = category;
    });

    this.setState({ categoryMenu: "subSelected" });
    router.push(`events/categories/${parentCategory.name}/${subCategory.name}`);
    removeEvents();
    categoryFilterFetchEvents(e.currentTarget.id);
  }

  resetCategoriesMenu = () => {
    this.setState({ categoryMenu: "full" });
    this.props.router.push("/events/categories");
    this.props.fetchEvents();
  }

  renderSubCategories = () => {
    const { categories, params } = this.props;

    const subCategorySelection = categories.map(category => {
      if (params.categoryName === category.name) {
        return (
          <div className="all-categories" key={ category.id }>
            <h4 onClick={ this.updateToSubCategory } id={ category.id }>{ category.name }</h4>
          </div>
        );
      } else if (params.subCategoryName === category.name) {
        return (
          <div className="all-categories" key={ category.id }>
            <h4 id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div>
        <div onClick={ this.resetCategoriesMenu } className="non-active">
          <h4>All Categories</h4>
        </div>
        { subCategorySelection }
      </div>
    );
  }

  render () {
    return (
      <div className="category-selector">
        <h3 onClick={ this.changeMenuState }>CATEGORY</h3>
        { this.renderCategories() }
      </div>
    );
  }
}

export default CategoriesIndex;
