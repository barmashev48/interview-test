import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaxForm from "@components/TaxForm/TaxForm.tsx";

describe("TaxForm", () => {
  it("should submit the correct values", async () => {
    const handleSubmit = jest.fn();

    render(<TaxForm onSubmit={handleSubmit} />);

    const salaryInput = screen.getByLabelText("Salary");
    const yearSelect = screen.getByLabelText("Tax Year");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(salaryInput, "50000");
    await userEvent.selectOptions(yearSelect, "2022");
    await userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();

    const formData = handleSubmit.mock.calls[0][0];
    expect(formData).toHaveProperty("salary", 50000);
    expect(formData).toHaveProperty("year", "2022");
  });
});
