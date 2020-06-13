require "application_system_test_case"

class PlanningPokerTest < ApplicationSystemTestCase
  test "sanity check" do
    visit '/'
    visit '/aroom'
    fill_in 'Name', with: 'Johnny!'
    click_button 'Join'
    click_button '1'
    click_button '2'
    click_button '5'
    click_button '8'
    click_button '3'
    click_button 'Show'
    click_button 'Reset'
  end
end
