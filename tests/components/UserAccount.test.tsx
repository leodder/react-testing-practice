import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
    it("should render user name", () => {
        const user: User = {
            id: 1,
            name: "John"
        }
        render(<UserAccount user={user} />)
        expect(screen.getByText(/John/i)).toBeInTheDocument();
    });

    it("should display Edit button when user's isAdmin is exist", () => {
        const user: User = {
            id: 2,
            name: "Jon",
            isAdmin: true
        }
        render(<UserAccount user={user} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Edit/i);
    });

    it("should not display Button when the user's isAdmin is not existing", () => {
        const user: User = {
            id: 3,
            name: "Jack"
        };
        render(<UserAccount user={user} />);
        const button = screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
    })

})