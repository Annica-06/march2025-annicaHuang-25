import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <article>
        <header>
          <h1>Cupcake making process</h1>
          <p>Posted by Annica Huang</p>
        </header>
      </article>
      <p>
        Step 1: Prepare Ingredients. Step 2: Combine Butter and Sugar. Step 3:
        Add Eggs and Vanilla. Step 4: Alternate Adding Dry and Wet Ingredients.
        Step 5: Fill the Cupcake Liners. Step 6: Bake and Cool Cupcakes. Step 7:
        Frost and Decorate.
      </p>
      <p>
        <img
          alt="food or something"
          src="file:///C:/Users/huanyue25/Downloads/1741895808.828769-2%20(5).jpg"
        />
      </p>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-black">child #1</p>
        <p className="m-6 border-2 border-black">child #2</p>
        <p className="m-6 border-2 border-black">child #3</p>
      </div>
    </div>
  );
}
