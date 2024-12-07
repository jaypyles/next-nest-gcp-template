import { render } from "@testing-library/react";
import UserTable from "./user-table";
import apiService from "@/app/services/api-service";

jest.mock("@/app/services/api-service");

describe("UserTable", () => {
  it("renders a table with users", async () => {
    jest.spyOn(apiService, "getUsers").mockResolvedValue([
      { name: "John Doe", email: "john.doe@example.com", age: 30 },
      { name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    ]);

    render(<UserTable />);
  });
});
