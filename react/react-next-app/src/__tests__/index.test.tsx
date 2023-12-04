
import Home from "@/pages"
import { render } from "@testing-library/react"

describe('HomePageTests', () => { 
    it("should render page in document", () => {
        render(
            <Home />
        )
    })
 })
