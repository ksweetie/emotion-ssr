require 'test_helper'

class FooControllerTest < ActionDispatch::IntegrationTest
  test "should get foo" do
    get foo_foo_url
    assert_response :success
  end

end
