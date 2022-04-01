require "test_helper"

class KyrsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kyr = kyrs(:one)
  end

  test "should get index" do
    get kyrs_url
    assert_response :success
  end

  test "should get new" do
    get new_kyr_url
    assert_response :success
  end

  test "should create kyr" do
    assert_difference('Kyr.count') do
      post kyrs_url, params: { kyr: { content: @kyr.content, name: @kyr.name, title: @kyr.title } }
    end

    assert_redirected_to kyr_url(Kyr.last)
  end

  test "should show kyr" do
    get kyr_url(@kyr)
    assert_response :success
  end

  test "should get edit" do
    get edit_kyr_url(@kyr)
    assert_response :success
  end

  test "should update kyr" do
    patch kyr_url(@kyr), params: { kyr: { content: @kyr.content, name: @kyr.name, title: @kyr.title } }
    assert_redirected_to kyr_url(@kyr)
  end

  test "should destroy kyr" do
    assert_difference('Kyr.count', -1) do
      delete kyr_url(@kyr)
    end

    assert_redirected_to kyrs_url
  end
end
