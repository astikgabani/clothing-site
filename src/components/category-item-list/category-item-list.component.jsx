import CategoryItem from "../category-item/category-item.component";
import "./category-item-list.styles.scss"

const CategoryItemList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem category={category} key={category.id}></CategoryItem>
        )
      })
      }
    </div>
  )
}

export default CategoryItemList;