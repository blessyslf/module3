require "application_system_test_case"

class KyrsTest < ApplicationSystemTestCase
  setup do
    @kyr = kyrs(:one)
  end

  test "visiting the index" do
    visit kyrs_url
    assert_selector "h1", text: "Kyrs"
  end

  test "creating a Kyr" do
    visit kyrs_url
    click_on "New Kyr"

    fill_in "Content", with: @kyr.content
    fill_in "Name", with: @kyr.name
    fill_in "Title", with: @kyr.title
    click_on "Create Kyr"

    assert_text "Kyr was successfully created"
    click_on "Back"
  end

  test "updating a Kyr" do
    visit kyrs_url
    click_on "Edit", match: :first

    fill_in "Content", with: @kyr.content
    fill_in "Name", with: @kyr.name
    fill_in "Title", with: @kyr.title
    click_on "Update Kyr"

    assert_text "Kyr was successfully updated"
    click_on "Back"
  end

  test "destroying a Kyr" do
    visit kyrs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Kyr was successfully destroyed"
  end
end
